import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlTabs extends MdlBase {
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

export class MdlTabBar extends MdlBase {
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

export class MdlTab extends MdlBase {
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

export class MdlTabPanel extends MdlBase {
    oninit(vnode) {
        this.classList = ["mdl-tabs__panel"];
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