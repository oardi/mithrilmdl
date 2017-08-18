import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlCard extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-card", "mdl-shadow--2dp");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {
                    vnode.attrs.title ?
                        <MdlCardTitle title={vnode.attrs.title} subtitle={vnode.attrs.subtitle} />
                        : null
                }

                {
                    vnode.attrs.text ?
                        <MdlCardSupportingText text={vnode.attrs.text} />
                        : null
                }

                {
                    vnode.attrs.actions ?
                        <MdlCardActions>{vnode.attrs.actions}</MdlCardActions>
                        : null
                }

                {
                    vnode.attrs.menu ?
                        <MdlCardMenu>{vnode.attrs.menu}</MdlCardMenu>
                        : null
                }

                {vnode.children}
            </div>
        )
    }
}

export class MdlCardTitle {

    view(vnode) {
        return (
            <div class="mdl-card__title mdl-card--expand">
                {vnode.attrs.title ? <MdlCardTitleText title={vnode.attrs.title} /> : null}
                {vnode.attrs.subtitle ? <MdlCardSubtitleText subtitle={vnode.attrs.subtitle} /> : null}
            </div>
        )
    }
}

export class MdlCardTitleText {
    view(vnode) {
        return (
            <h2 class="mdl-card__title-text">{vnode.attrs.title}</h2>
        )
    }
}

export class MdlCardSubtitleText {
    view(vnode) {
        return (
            <div class="mdl-card__subtitle-text">{vnode.attrs.subtitle}</div>
        )
    }
}

export class MdlCardSupportingText {
    view(vnode) {
        return (
            <div
                class="mdl-card__supporting-text"
            >
                <div style="padding: 16px;">
                    {vnode.attrs.text ? vnode.attrs.text : vnode.children}
                </div>
            </div>
        )
    }
}

export class MdlCardActions { // mdl-card--border
    oninit(vnode) {
        this.classList = ["mdl-card__actions"];
        vnode.attrs.border ? this.classList.push("mdl-card--border") : null;
    }

    view(vnode) {
        return (
            <div
                class={this.classList.join(" ")}
                style="overflow-x: auto;"
            >
                {vnode.children}
            </div>
        )
    }
}

export class MdlCardMenu {
    view(vnode) {
        return (
            <div class="mdl-card__menu">
                {vnode.children}
            </div>
        )
    }
}

//mdl-card--border