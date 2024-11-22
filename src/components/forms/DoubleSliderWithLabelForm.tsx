import { DualRangeSlider } from "../ui/slider";
import { FormState, Question } from "./FormRenderer";

// prettier-ignore
export type DoubleSliderWithLabelFormProps =
    Omit<Question, "questionType" | "dataType"> &
    FormState;

export const DoubleSliderWithLabelForm = ({
    questionId,
    questionText,
    options,
    formState,
    setFormState,
}: DoubleSliderWithLabelFormProps) => {
    const question = formState.questions.find((q) => q.questionId === questionId);

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <DualRangeSlider
                    data-testid="double-slider-with-label-form"
                    className="pt-4 pb-10 text-gray-500"
                    defaultValue={[
                        question?.options[0]?.value || options[0].value,
                        question?.options[1]?.value || options[options.length - 1].value,
                    ]}
                    value={[
                        question?.options[0]?.value || options[0].value,
                        question?.options[1]?.value || options[options.length - 1].value,
                    ]}
                    min={options[0].value}
                    max={options[options.length - 1].value}
                    onValueChange={(value) => {
                        const updatedQuestions = formState.questions.map((q) =>
                            q.questionId === questionId
                                ? {
                                      ...q,
                                      options: [
                                          {
                                              label: options.find((opt) => opt.value === value[0])
                                                  ?.label,
                                              value: value[0],
                                          },
                                          {
                                              label: options.find((opt) => opt.value === value[1])
                                                  ?.label,
                                              value: value[1],
                                          },
                                      ],
                                  }
                                : q,
                        );
                        setFormState({
                            ...formState,
                            questions: updatedQuestions,
                        });
                    }}
                    label={(value) => (
                        <span className="mt-2 text-sm text-gray-500">
                            {options.find((option) => option.value === value)?.label}
                        </span>
                    )}
                    labelPosition="bottom"
                />
            </div>
        </div>
    );
};
