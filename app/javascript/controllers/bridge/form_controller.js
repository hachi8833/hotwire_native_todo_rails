import { BridgeComponent, BridgeElement } from "@hotwired/hotwire-native-bridge"

export default class extends BridgeComponent {
  static component = "form"
  static targets = ["submit"]

  submitTargetConnected(target) {
    const submitButton = new BridgeElement(target)
    const submitTitle = submitButton.title

    this.send("connect", { submitTitle }, () => {
      target.click()
    })
  }
}