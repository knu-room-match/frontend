import { SelectorWithLabelForm } from "../SelectorWithLabelForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<SelectorWithLabelForm/>", () => {
    const formState = {
        "test-question-selector": [],
    };
    const setFormState = jest.fn();

    beforeEach(() => {
        render(
            <SelectorWithLabelForm
                questionText="test-question-selector"
                options={["options1", "options2", "options3"]}
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
        fireEvent.click(screen.getByRole("combobox"));
        fireEvent.click(screen.getByTestId("select-options_options1"));

        const options = ["options1", "options2", "options3"];

        options.forEach((option) => {
            fireEvent.click(screen.getByRole("combobox"));
            fireEvent.click(screen.getByTestId(`select-options_${option}`));

            expect(setFormState).toHaveBeenCalledWith({
                ...formState,
                "test-question-selector": option,
            });
        });
    });
});
