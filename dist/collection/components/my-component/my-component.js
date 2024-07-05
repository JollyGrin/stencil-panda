import { h } from "@stencil/core";
import { format } from "../../utils/utils";
// TODO: get path alias to work with styled-system
import { css } from "../../../styled-system/css";
import "./my-component.css";
import { button } from "../../styles/button";
export class MyComponent {
    constructor() {
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return (h("div", { key: '6e3a9fc77611c9627113656114d262c12c8f4fcf', class: css({ color: 'red', padding: '1rem' }) }, "Hello, World! I'm ", this.getText(), h("button", { key: '59a296c036beb0f4846db7288773f8bb761abd1a', class: button({ visual: 'solid' }), onClick: () => console.log('HIT!') }, "lalalal")));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../../styled-system/styles.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../../styled-system/styles.css"]
        };
    }
    static get properties() {
        return {
            "first": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The first name"
                },
                "attribute": "first",
                "reflect": false
            },
            "middle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The middle name"
                },
                "attribute": "middle",
                "reflect": false
            },
            "last": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The last name"
                },
                "attribute": "last",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=my-component.js.map
