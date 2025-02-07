import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class extends BridgeComponent {
  static component = "keyboard"

  connect() {
    super.connect()
    this.setUpToolbarListeners()
  }

  toggleToolbar() {
    this.send("focus", {}, () => { })

  }

  setUpToolbarListeners() {
    const element = this.element

    this.receive("heading1", {}, () => {
      this.toggleAttribute(element.editor, "heading1")
    })

    this.receive('bold', {}, () => {
      this.toggleAttribute(element.editor, "bold")
    })

    this.receive('italic', {}, () => {
      this.toggleAttribute(element.editor, "italic")
    })

    this.receive('undo', {}, () => {
      element.editor.undo()
    })

    this.receive('redo', {}, () => {
      element.editor.redo()
    })
  }

  toggleAttribute(editor, attribute) {
    const isActive = editor.attributeIsActive(attribute)

    if (isActive) {
      editor.deactivateAttribute(attribute)
    } else {
      editor.activateAttribute(attribute)
    }
  }
}