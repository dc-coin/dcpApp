import React from "react";
import { Root } from "native-base";
import { createStackNavigator , createDrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import Setting from "./screens/setting";

import {ContentDetail, ContentView} from "./screens/content";
import PurchaseList from "./screens/purchaseList";
import SalesList from "./screens/salesList";
import MusicSearchES from "./screens/music";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },

    ContentDetail : {screen: ContentDetail},
    ContentView : {screen: ContentView},
    PurchaseList : {screen: PurchaseList},
    SalesList : {screen: SalesList},
    Setting : {screen: Setting},

    MusicSearchES : {screen: MusicSearchES},
    
  },
  {
    //initialRouteName: "Home",
    initialRouteName: "ContentView",    
    
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    
    Home : {screen: Home},

    ContentDetail : {screen: ContentDetail},
    ContentView : {screen: ContentView},
    PurchaseList : {screen: PurchaseList},
    SalesList : {screen: SalesList},
    Setting : {screen: Setting},

    MusicSearchES : {screen: MusicSearchES},

    // Header1: { screen: Header1 },
    // Header2: { screen: Header2 },
    // Header3: { screen: Header3 },
    // Header4: { screen: Header4 },
    // Header5: { screen: Header5 },
    // Header6: { screen: Header6 },
    // Header7: { screen: Header7 },
    // Header8: { screen: Header8 },
    // HeaderSpan: { screen: HeaderSpan },
    // HeaderNoShadow: { screen: HeaderNoShadow },
    // HeaderNoLeft: { screen: HeaderNoLeft },
    // HeaderTransparent: { screen: HeaderTransparent },

    // BasicFooter: { screen: BasicFooter },
    // IconFooter: { screen: IconFooter },
    // IconText: { screen: IconText },
    // BadgeFooter: { screen: BadgeFooter },

    // Default: { screen: Default },
    // Outline: { screen: Outline },
    // Rounded: { screen: Rounded },
    // Block: { screen: Block },
    // Full: { screen: Full },
    // Custom: { screen: Custom },
    // Transparent: { screen: Transparent },
    // IconBtn: { screen: IconBtn },
    // Disabled: { screen: Disabled },

    // BasicCard: { screen: BasicCard },
    // NHCardItemBordered: { screen: NHCardItemBordered },
    // NHCardItemButton: { screen: NHCardItemButton },
    // NHCardImage: { screen: NHCardImage },
    // NHCardShowcase: { screen: NHCardShowcase },
    // NHCardList: { screen: NHCardList },
    // NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },
    // NHCardTransparent: { screen: NHCardTransparent },
    // NHCardCustomBorderRadius: { screen: NHCardCustomBorderRadius },

    // SimpleDeck: { screen: SimpleDeck },
    // AdvancedDeck: { screen: AdvancedDeck },

    // BasicFab: { screen: BasicFab },
    // MultipleFab: { screen: MultipleFab },

    // FixedLabel: { screen: FixedLabel },
    // InlineLabel: { screen: InlineLabel },
    // FloatingLabel: { screen: FloatingLabel },
    // PlaceholderLabel: { screen: PlaceholderLabel },
    // StackedLabel: { screen: StackedLabel },
    // RegularInput: { screen: RegularInput },
    // UnderlineInput: { screen: UnderlineInput },
    // RoundedInput: { screen: RoundedInput },
    // IconInput: { screen: IconInput },
    // SuccessInput: { screen: SuccessInput },
    // ErrorInput: { screen: ErrorInput },
    // DisabledInput: { screen: DisabledInput },
    // PickerInput: { screen: PickerInput },
    // TextArea: { screen: TextArea },

    // Icons: { screen: Icons },
    // BasicIcon: { screen: BasicIcon },
    // StateIcon: { screen: StateIcon },
    // PlatformSpecificIcon: { screen: PlatformSpecificIcon },
    // IconFamily: { screen: IconFamily },

    // RowNB: { screen: RowNB },
    // ColumnNB: { screen: ColumnNB },
    // NestedGrid: { screen: NestedGrid },
    // CustomRow: { screen: CustomRow },
    // CustomCol: { screen: CustomCol },

    // NHBasicList: { screen: NHBasicList },
    // NHListItemSelected: { screen: NHListItemSelected },
    // NHListDivider: { screen: NHListDivider },
    // NHListSeparator: { screen: NHListSeparator },
    // NHListHeader: { screen: NHListHeader },
    // NHListIcon: { screen: NHListIcon },
    // NHListAvatar: { screen: NHListAvatar },
    // NHListThumbnail: { screen: NHListThumbnail },
    // NHListItemNoIndent: { screen: NHListItemNoIndent },

    // BasicListSwipe: { screen: BasicListSwipe },
    // SwipeRowCustomStyle: { screen: SwipeRowCustomStyle },
    // MultiListSwipe: { screen: MultiListSwipe },

    // RegularPicker: { screen: RegularPicker },
    // PickerWithIcon: { screen: PickerWithIcon },
    // PlaceholderPicker: { screen: PlaceholderPicker },
    // PlaceholderPickerNote: { screen: PlaceholderPickerNote },
    // BackButtonPicker: { screen: BackButtonPicker },
    // PickerTextItemText: { screen: PickerTextItemText },
    // HeaderPicker: { screen: HeaderPicker },
    // HeaderStylePicker: { screen: HeaderStylePicker },
    // CustomHeaderPicker: { screen: CustomHeaderPicker },
    // PickerWithIconStyle: { screen: PickerWithIconStyle },

    // NHCustomRadio: { screen: NHCustomRadio },
    // NHDefaultRadio: { screen: NHDefaultRadio },

    // BasicTab: { screen: BasicTab },
    // ConfigTab: { screen: ConfigTab },
    // ScrollableTab: { screen: ScrollableTab },

    // BasicSegment: { screen: BasicSegment },
    // AdvSegment: { screen: AdvSegment },
    // SegmentHeaderIcon: { screen: SegmentHeaderIcon },

    // BasicToast: { screen: BasicToast },
    // ToastDuration: { screen: ToastDuration },
    // ToastPosition: { screen: ToastPosition },
    // ToastType: { screen: ToastType },
    // ToastText: { screen: ToastText },
    // ToastButton: { screen: ToastButton },

    // RegularActionSheet: { screen: RegularActionSheet },
    // IconActionSheet: { screen: IconActionSheet },

    // AccordionDefault: { screen: AccordionDefault },
    // AccordionIcon: { screen: AccordionIcon },
    // AccordionIconStyle: { screen: AccordionIconStyle },
    // AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
    // AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
