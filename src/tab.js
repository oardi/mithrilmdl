import m from 'mithril';
import { Base } from './base';

export class Tabs extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-tabs", "mdl-js-tabs", "mdl-js-ripple-effect");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        )
    }
}

export class TabBar extends Base {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-tabs__tab-bar");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        )
    }
}

export class Tab extends Base {
    oninit(vnode) {
        this.classList.push("mdl-tabs__tab");
        vnode.attrs.active ? this.classList.push("is-active") : null;
    }

    view(vnode) {
        return (
            <a
                class={this.classList.join(" ")}
                href={"#" + vnode.attrs.target}
                onclick={vnode.attrs.onclick ? (e) => { vnode.attrs.onclick() } : null}
            >
                {vnode.children}
            </a>
        )
    }
}

export class TabPanel extends Base {
    oninit(vnode) {
        this.classList.push("mdl-tabs__panel");
        vnode.attrs.active ? this.classList.push("is-active") : null;
    }

    view(vnode) {
        return (
            <div
                class={this.classList.join(" ")} id={vnode.attrs.id}
                style="overflow-x: auto;"
            >
                {vnode.children}
            </div>
        )
    }
}