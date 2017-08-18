import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlTextField extends MdlBase {
    constructor() {
        super();
        this.vnode;
    }

    oninit(vnode) {
        super.oninit(vnode);

        this.vnode = vnode;
        this.classList.push("mdl-textfield", "mdl-js-textfield");
        vnode.attrs.floatingLabel ? this.classList.push("mdl-textfield--floating-label") : null;
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        )
    }
}


export class MdlTextFieldInput extends MdlBase {
    constructor() {
        super();
        this.dom;
    }

    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-textfield__input");
    }

    oncreate(vnode) {
        this.dom = vnode.dom;
        //this.vnode = vnode;
        let oldValue = vnode.dom.value;
        //let oldValue = vnode.attrs.value;

        this.intervalCheck = setInterval(() => {
            let newVal = vnode.dom.value;
            //let newVal = vnode.attrs.value;

            if (oldValue != newVal) {
                this.updateTextField();
                window.clearInterval(this.intervalCheck);//clear interval
                //https://stackoverflow.com/questions/2901108/how-do-i-clear-this-setinterval
            }
        }, 300);//300 ok?, evtl. mit timeout final entfernen?

        setTimeout(() => {
            if (this.intervalCheck) window.clearInterval(this.intervalCheck);//final clear after 10 sec
        }, 6000);
    }

    onremove() {
        window.clearInterval(this.intervalCheck);
    }

    updateTextField() {
        let textField = closest(this.dom, "mdl-textfield");
        if (textField) {
            componentHandler.downgradeElements(textField);//downgrade to reregister!
            componentHandler.upgradeElement(textField);
        }
    }

    view(vnode) {
        let attributes = {};
        vnode.attrs.pattern ? attributes.pattern = vnode.attrs.pattern : null;
        vnode.attrs.placeholder ? attributes.placeholder = vnode.attrs.placeholder : null;
        vnode.attrs.name ? attributes.name = vnode.attrs.name : null;
        vnode.attrs.type ? attributes.type = vnode.attrs.type : attributes.type = "text";
        vnode.attrs.value != "" ? attributes.value = vnode.attrs.value : attributes.value = "";
        vnode.attrs.oninput ? attributes.oninput = (e) => vnode.attrs.oninput(e) : null;
        vnode.attrs.autocomplete ? attributes.autocomplete = "on" : attributes.autocomplete = "off";

        return (
            <input
                class={this.classList.join(" ")}
                {...attributes}
            />
        )
    }
}

export class MdlTextFieldLabel extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-textfield__label");
    }

    //for="username" noch integrieren?
    view(vnode) {
        return (
            <label class={this.classList.join(" ")}>
                {vnode.attrs.value ? vnode.attrs.value : vnode.children}
            </label>
        )
    }
}

export class MdlTextFieldError extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-textfield__error");
    }

    oncreate(vnode) {
        for (let attr of Object.keys(vnode.attrs)) {
            vnode.dom.setAttribute(attr, vnode.attrs[attr]);
        }
    }
    //for="username" noch integrieren?
    view(vnode) {
        return (
            <span class={this.classList.join(" ")}>{vnode.attrs.text ? vnode.attrs.text : vnode.children}</span>
        )
    }
}




//https://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector
function closest(el, selector, stopSelector) {
    var retval = null;
    el = el.parentElement;//changed to listen first to parents
    while (el) {
        if (el.className.indexOf(selector) > -1) {
            retval = el;
            break
        } else if (stopSelector && el.className.indexOf(stopSelector) > -1) {
            break
        }
        el = el.parentElement;
    }
    return retval;
}