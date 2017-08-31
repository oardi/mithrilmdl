import m from 'mithril';
import { Icon } from './icon';
import { Base } from './base';

export class Chip extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-chip");

        this.contactClassList = ["mdl-chip__contact"];

        vnode.attrs.contact ? this.classList.push("mdl-chip--contact") : null;
        vnode.attrs.contact && vnode.attrs.contactColor ? this.contactClassList.push(`mdl-color--${vnode.attrs.contactColor}`) : null;
        vnode.attrs.contact && vnode.attrs.contactColorText ? this.contactClassList.push(`mdl-color-text--${vnode.attrs.contactColorText}`) : null;

        vnode.attrs.deletable ? this.classList.push("mdl-chip--deletable") : null;
    }

    view(vnode) {
        let deleteAttributes = {};
        vnode.attrs.onclick ? deleteAttributes.onclick = (e) => vnode.attrs.onclick(e) : null;

        return (
            <span class={this.classList.join(" ")}>
                {vnode.attrs.contact ?
                    <span class={this.contactClassList.join(" ")}>{vnode.attrs.contact}</span>
                    : null}

                <span class="mdl-chip__text">
                    {vnode.attrs.text ? vnode.attrs.text : vnode.children}
                </span>

                {vnode.attrs.deletable ?
                    <button
                        type="button"
                        class="mdl-chip__action"
                        {...deleteAttributes}
                    >
                        <Icon icon={vnode.attrs.deleteIcon ? vnode.attrs.deleteIcon : "cancel"} />
                    </button>
                    : null}
            </span>
        )
    }
}