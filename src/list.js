import m from 'mithril';
import { Base } from './base';
import { Icon } from './icon';

export class List extends Base {
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

export class ListItem extends Base {
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
                    this.isDropDownCollapsed ? <Icon icon="keyboard_arrow_down" class="toggle" /> : <Icon icon="keyboard_arrow_up" class="toggle" />
                    : null}
            </li>
        )
    }
}

export class ListItemPrimaryContent extends Base {
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

export class ListItemSecondaryAction extends Base {
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

export class ListItemSubTitle extends Base {
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
export class ListSubHeader extends Base {
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

export class ListItemText extends Base {
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