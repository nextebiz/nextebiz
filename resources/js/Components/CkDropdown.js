import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

export default class ButtonUI extends Plugin {
    static get pluginName() {
        return "ButtonUI";
    }
    init() {
        console.log("ButtonUI was initialized.");

        const editor = this.editor;

        editor.ui.componentFactory.add("ButtonUI", () => {
            // The button will be an instance of ButtonView.
            const button = new ButtonView();

            button.set({
                label: "ButtonUI",
                withText: true,
            });
            button.on("execute", () => {
                const now = new Date();

                // Change the model using the model writer.
                editor.model.change((writer) => {
                    // Insert the text at the user's current position.
                    editor.model.insertContent(
                        writer.createText(now.toString())
                    );
                });
            });

            return button;
        });
    }
}
