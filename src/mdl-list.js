import m from 'mithril';
import { MdlBase } from './mdl-base';
import { MdlIcon } from './mdl-icon';

export class MdlList extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list");
    }

    view(vnode) {
        return (
            <ul class={this.classList.join(" ")}>
                {vnode.children}
            </ul>
        )
    }
}

export class MdlListItem extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);

        this.classList = [];
        this.classList.push("mdl-list__item");
        vnode.attrs.border ? this.classList.push("mdl-list__item-border") : null;
        vnode.attrs.twoLine ? this.classList.push("mdl-list__item--two-line") : null;
        vnode.attrs.threeLine ? this.classList.push("mdl-list__item--three-line") : null;
        vnode.attrs.dropDown ? this.classList.push("mdl-list__item--drop-down", "in") : null;

        this.isDropDownCollapsed = vnode.attrs.dropDown ? true : false;
    }

    onClick(e, vnode) {
        e.stopPropagation();

        if (this.isDropDownCollapsed != undefined) {
            this.isDropDownCollapsed = !this.isDropDownCollapsed;

            if (this.isDropDownCollapsed) this.classList.push("in");
            else this.classList.splice(this.classList.indexOf("in"), 2);
        }

        if (vnode.attrs.onclick) vnode.attrs.onclick(e);
    }

    view(vnode) {
        return (
            <li
                class={this.classList.join(" ") + ` mdl-color-text--${vnode.attrs.color}`}
                onclick={(e) => { this.onClick(e, vnode) }}
            >
                {vnode.children}
                {vnode.attrs.dropDown ?
                    this.isDropDownCollapsed ? <MdlIcon icon="keyboard_arrow_down" class="toggle" /> : <MdlIcon icon="keyboard_arrow_up" class="toggle" />
                    : null}
            </li>
        )
    }
}

export class MdlListItemPrimaryContent extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list__item-primary-content");
    }
    view(vnode) {
        return (
            <span class={this.classList.join(" ")}>
                {vnode.children}
            </span>
        )
    }
}

export class MdlListItemSecondaryAction extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list__item-secondary-action");
    }
    view(vnode) {
        return (
            <a class={this.classList.join(" ")}>
                {vnode.children}
            </a>
        )
    }
}

export class MdlListItemSubTitle extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list__item-sub-title");
    }
    view(vnode) {
        return (
            <span class={this.classList.join(" ")}>
                {vnode.children}
            </span>
        )
    }
}

//custom - innerhalb von mdl.list nutzen!
export class MdlListSubHeader extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list__subheader");
    }
    view(vnode) {
        return (
            <li class={this.classList.join(" ")}>
                {vnode.children}
            </li>
        )
    }
}

export class MdlListItemText extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-list__item-text-body");
    }
    view(vnode) {
        return (
            <span class={this.classList.join(" ")}>
                {vnode.children}
            </span>
        )
    }
}