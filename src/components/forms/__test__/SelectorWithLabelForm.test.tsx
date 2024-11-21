import { SelectorWithLabelForm } from "../SelectorWithLabelForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<SelectorWithLabelForm/>", () => {
    const formState = {
        "test-question-selector": [{ value: "" }],
    };
    const setFormState = jest.fn();

    const options = [{ label: "option__label", value: "option__value" }];

    beforeEach(() => {
        render(
            <SelectorWithLabelForm
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

        options.forEach((option) => {
            fireEvent.click(screen.getByText(`option__label`));

            expect(setFormState).toHaveBeenCalledWith({
                ...formState,
                "test-question-selector": [{ value: option.value }],
            });

            jest.clearAllMocks();
        });
    });
});
