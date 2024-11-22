import { FormProps } from "../FormRenderer";
import { SelectorWithLabelForm } from "../SelectorWithLabelForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<SelectorWithLabelForm/>", () => {
    const formState: FormProps = {
        _id: "test-id",
        title: "test-title",
        description: "test-description",
        questions: [
            {
                questionId: 1,
                questionText: "test-question-selector",
                questionType: "selector",
                dataType: "string",
                options: [],
            },
        ],
    };

    const setFormState = jest.fn();

    const options = [{ label: "option__label", value: "option__value" }];

    beforeEach(() => {
        render(
            <SelectorWithLabelForm
                questionId={1}
                questionText="test-question-selector"
                options={options}
                formState={formState}
                setFormState={setFormState}
            />,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should render Container properly", () => {
        expect(screen.getByTestId("selector-with-label-form")).toBeInTheDocument();
    });

    test("should call setFormState with appropriate values", () => {
        fireEvent.click(screen.getByText("옵션을 선택해주세요"));
        fireEvent.click(screen.getByText("option__label"));

        expect(setFormState).toHaveBeenCalledWith({
            ...formState,
            questions: [
                {
                    ...formState.questions[0],
                    options: [{ label: "option__label", value: "option__value" }],
                },
            ],
        });
    });
});
