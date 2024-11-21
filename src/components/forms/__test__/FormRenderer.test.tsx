import { FormProps, FormRenderer } from "../FormRenderer";
import { fireEvent, render, screen } from "@testing-library/react";

/**
 * Each Element's following options data-testid and id
 *
 * <CheckBoxWithLabelForm/>
 * id : checkbox_{option.label}
 * data-testid : checkbox_{option.label}
 *
 * <SelectorWithLabelForm/>
 * data-testid : select-options_{option.label}
 *
 */
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
                        options: [
                            { label: "options1", value: "options1" },
                            { label: "options2", value: "options2" },
                            { label: "options3", value: "options3" },
                        ],
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
                    "test-question-selector": [{ value: option }],
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
                        options: [
                            { label: "options1", value: 1 },
                            { label: "options2", value: 2 },
                            { label: "options3", value: 3 },
                        ],
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
            const checkbox = await screen.findByTestId(`checkbox_options1`);
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

        test("should call setFormState with appropriate values", () => {
            const checkboxes = [{ label: "options1" }];

            checkboxes.forEach((checkbox) => {
                fireEvent.click(screen.getByTestId(`checkbox_${checkbox.label}`));

                expect(setFormState).toHaveBeenCalledWith({
                    ...formState,
                    "test-question-checkbox": [{ value: true }],
                });
            });
        });
    });
});
