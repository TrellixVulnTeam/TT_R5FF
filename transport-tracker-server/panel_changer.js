// PanelChanger changes the focus of the front end display
// by publishing the three panels defined in `panelConfig`,
// one after the other every ten seconds. This changes the
// bounds of the displayed map, along with which Hotels and
// bus stops are featured.
exports.PanelChanger = class {
  constructor(mapRef,mapRef1,panelConfig) {
    this.mapRef = mapRef;
        this.mapRef1 = mapRef1;
    this.panelConfig = panelConfig;
    this.panelIndex = 0;
this.panelAdvance();
    // Change the panel once every ten seconds
   // this.timeTimerId = setInterval(() => {
   //   this.panelAdvance();
   // }, 10000);
  }

  panelAdvance() {
    this.mapRef.set(this.panelConfig[this.panelIndex]);
        this.mapRef1.set(this.panelConfig[3]);

  }
};