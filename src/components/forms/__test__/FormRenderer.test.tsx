import { FormProps, FormRenderer } from "../FormRenderer";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<FormRenderer/>", () => {
    describe("<SelectorWithLabelForm/>", () => {
        const formState = {
            "test-question-selector": [],
        };
        const setFormState = jest.fn();

        beforeEach(() => {
            const formProps: FormProps = {
                title: "test-title",
                description: "test-description",
                questions: [
                    {
                        questionText: "test-question-selector",
                        questionType: "selector",
                        dataType: "string",
                        options: ["options1", "options2", "options3"],
                    },
                ],
            };

            render(
                <FormRenderer
                    title={formProps.title}
                    description={formProps.description}
                    questions={formProps.questions}
                    formState={formState}
                    setFormState={setFormState}
                />,
            );
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        test("should render 'selector' questions properly", () => {
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
                    "test-question-selector": [option],
                });
            });
        });
    });

    describe("<CheckBoxWithLabelForm/>", () => {
        const formState = {
            "test-question-checkbox": [],
        };
        const setFormState = jest.fn();

        beforeEach(() => {
            const formProps: FormProps = {
                title: "test-title",
                description: "test-description",
                questions: [
                    {
                        questionText: "test-question-checkbox",
                        questionType: "checkbox",
                        dataType: "number",
                        options: [1, 2, 3],
                    },
                ],
            };

            render(
                <FormRenderer
                    title={formProps.title}
                    description={formProps.description}
                    questions={formProps.questions}
                    formState={formState}
                    setFormState={setFormState}
                />,
            );
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        test("should render 'checkbox' questions properly", () => {
            expect(screen.getByTestId("checkbox-with-label-form")).toBeInTheDocument();
        });

        test("should call setFormState once when checkbox is clicked", async () => {
            const checkbox = await screen.findByTestId("checkbox_1");
            expect(checkbox.getAttribute("data-state")).toBe("unchecked");

            fireEvent.click(checkbox);
            expect(setFormState).toHaveBeenCalledTimes(1);
        });

        test("should call setFormState twice when checkbox is clicked twice", async () => {
            const checkbox = await screen.findByTestId("checkbox_1");

            fireEvent.click(checkbox);
            expect(setFormState).toHaveBeenCalledTimes(1);

            fireEvent.click(checkbox);
            expect(setFormState).toHaveBeenCalledTimes(2);
        });

        test("should call setFormState with appropriate values", () => {
            const checkboxes = [1, 2, 3];

            checkboxes.forEach((checkbox) => {
                fireEvent.click(screen.getByTestId(`checkbox_${checkbox}`));

                expect(setFormState).toHaveBeenCalledWith({
                    ...formState,
                    "test-question-checkbox": [checkbox],
                });
            });
        });
    });
});
