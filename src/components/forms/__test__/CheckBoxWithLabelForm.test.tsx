import { CheckBoxWithLabelForm } from "../CheckBoxWithLabelForm";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

describe("<CheckBoxWithLabelForm/>", () => {
    const formState = {
        "test-question-text": [{ value: "" }],
    };
    const setFormState = jest.fn();

    const options = [
        { label: "options1", value: "options1" },
        { label: "options2", value: "options2" },
        { label: "options3", value: "options3" },
    ];

    beforeEach(() => {
        render(
            <CheckBoxWithLabelForm
                questionText={"test-question-text"}
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
        expect(screen.getByTestId("checkbox-with-label-form")).toBeInTheDocument();
    });

    test("should render each options properly", () => {
        expect(screen.getByText("options1")).toBeInTheDocument();
        expect(screen.getByText("options2")).toBeInTheDocument();
        expect(screen.getByText("options3")).toBeInTheDocument();
    });

    test("should call setFormState once when checkbox is clicked", async () => {
        const checkbox = await screen.findByTestId("checkbox_options1");
        expect(checkbox.getAttribute("data-state")).toBe("unchecked");

        fireEvent.click(checkbox);
        expect(setFormState).toHaveBeenCalledTimes(1);
    });

    test("should call setFormState twice when checkbox is clicked twice", async () => {
        const checkbox = await screen.findByTestId("checkbox_options1");

        fireEvent.click(checkbox);
        expect(setFormState).toHaveBeenCalledTimes(1);

        fireEvent.click(checkbox);
        expect(setFormState).toHaveBeenCalledTimes(2);
    });
});
