import './mdl.scss';//custom tweaks

import { MdlBadge } from './mdl-badge';
import { MdlButton } from './mdl-button';
import { MdlChip } from './mdl-chip';
import { MdlIcon } from './mdl-icon';
import { MdlToggle } from './mdl-toggle';
import { MdlGrid, MdlCell } from './mdl-grid';
import { MdlLayout, MdlLayoutContent, MdlLayoutDrawer, MdlLayoutHeader, MdlLayoutTitle, MdlLayoutSpacer } from './mdl-layout';
import { MdlList, MdlListItem, MdlListItemPrimaryContent, MdlListItemSecondaryAction, MdlListItemSubTitle, MdlListSubHeader, MdlListItemText } from './mdl-list';
import { MdlNavigation, MdlNavigationLink } from './mdl-navigation';
import { MdlDialog, MdlDialogService } from './mdl-dialog';
import { MdlSlider } from './mdl-slider';
import { MdlSpinner } from './mdl-spinner';
import { MdlCard, MdlCardActions, MdlCardSupportingText, MdlCardTitle, MdlCardTitleText, MdlCardSubtitleText, MdlCardMenu } from './mdl-card';
import { MdlTab, MdlTabBar, MdlTabPanel, MdlTabs } from './mdl-tab';
import { MdlTextField, MdlTextFieldInput, MdlTextFieldLabel, MdlTextFieldError } from './mdl-textfield';
import { MdlSnackBar, MdlSnackBarService } from './mdl-snackbar';
import { MdlTable } from './mdl-table';
import { MdlToolbar } from './mdl-toolbar';

module.exports.Mdl = {
    Badge: MdlBadge,

    Button: MdlButton,

    Card: MdlCard,
    CardActions: MdlCardActions,
    CardSupportingText: MdlCardSupportingText,
    CardTitle: MdlCardTitle,
    CardTitleText: MdlCardTitleText,
    CardSubtitleText: MdlCardSubtitleText,
    CardMenu: MdlCardMenu,

    Chip: MdlChip,

    Dialog: MdlDialog,
    DialogService: MdlDialogService,

    Icon: MdlIcon,

    Layout: MdlLayout,
    LayoutContent: MdlLayoutContent,
    LayoutDrawer: MdlLayoutDrawer,
    LayoutHeader: MdlLayoutHeader,
    LayoutTitle: MdlLayoutTitle,
    LayoutSpacer: MdlLayoutSpacer,

    Grid: MdlGrid,
    Cell: MdlCell,

    List: MdlList,
    ListItem: MdlListItem,
    ListItemPrimaryContent: MdlListItemPrimaryContent,
    ListItemSecondaryAction: MdlListItemSecondaryAction,
    ListItemSubTitle: MdlListItemSubTitle,
    ListSubHeader: MdlListSubHeader,
    ListItemText: MdlListItemText,

    Navigation: MdlNavigation,
    NavigationLink: MdlNavigationLink,

    Slider: MdlSlider,

    SnackBar: MdlSnackBar,
    SnackBarService: MdlSnackBarService,

    Spinner: MdlSpinner,

    Tab: MdlTab,
    TabBar: MdlTabBar,
    TabPanel: MdlTabPanel,
    Tabs: MdlTabs,

    Table: MdlTable,

    TextField: MdlTextField,
    TextFieldInput: MdlTextFieldInput,
    TextFieldLabel: MdlTextFieldLabel,
    TextFieldError: MdlTextFieldError,

    Toggle: MdlToggle,

    Toolbar: MdlToolbar
}