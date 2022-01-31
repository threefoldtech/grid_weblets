export default class FarmingProfile {
  public constructor(
    public name: string = "DIY",
    public memory: number = 0,
    public cpu: number = 0,
    public hdd: number = 0,
    public ssd: number = 0,
    public price: number = 0.09,
    public priceAfter5Years: number = 2,
    public maximumTokenPrice: number = 2,
    public powerUtilization: number = 40,
    public powerCost: number = 0.15,
    public certified: boolean = false,
    public publicIp: boolean = false,
    public investmentCostHW: number = 2200,
    public nuRequiredPerCu: number = 30
  ) {}

  private _max(val: number, max = 0) {
    val = val ?? 0;
    return Math.max(val, max);
  }

  public get cu(): number {
    const { memory, cpu, ssd } = this;
    const x = (memory - 1) / 4;
    const y = cpu * 2;
    const z = ssd / 50;
    return this._max(Math.min(x, y, z));
  }

  public get nu(): number {
    return this._max(this.cu * this.nuRequiredPerCu);
  }

  public get su(): number {
    const { hdd, ssd, cu } = this;

    const x = hdd / 1200;
    const y = ssd * 0.8;
    return x + y / 200;
  }

  public get averageTokenPrice(): number {
    const { price, priceAfter5Years } = this;
    return (price + priceAfter5Years) / 2;
  }

  public get rewardPerCu(): number {
    return 2.4;
  }

  public get rewardPerSu(): number {
    return 1;
  }

  public get rewardPerNu(): number {
    return 0.03;
  }

  private get tftRewardPer(): number {
    return (this.certified ? 1 : 0) * 0.25 + 1;
  }

  public get tftRewardPerCu(): number {
    const { rewardPerCu, price, tftRewardPer } = this;
    return (rewardPerCu / price) * tftRewardPer;
  }

  public get tftRewardPerSu(): number {
    const { rewardPerSu, price, tftRewardPer } = this;
    return (rewardPerSu / price) * tftRewardPer;
  }

  public get tftRewardPerNu(): number {
    const { rewardPerNu, averageTokenPrice } = this;
    return rewardPerNu / averageTokenPrice;
  }

  public get cuFarmingRewardInTft(): number {
    const { cu, tftRewardPerCu } = this;
    return tftRewardPerCu * cu;
  }

  public get suFarmingRewardInTft(): number {
    const { su, tftRewardPerSu } = this;
    return tftRewardPerSu * su;
  }

  public get nuFarmingRewardInTft(): number {
    const { nu, tftRewardPerNu, publicIp } = this;
    return publicIp ? tftRewardPerNu * nu : 0;
  }

  public get totalFarmingRewardInTft(): number {
    const { cuFarmingRewardInTft, suFarmingRewardInTft, nuFarmingRewardInTft } =
      this;
    return cuFarmingRewardInTft + suFarmingRewardInTft + nuFarmingRewardInTft;
  }

  /* help functions for charts */
  public getTotalReward(current_price: number): number {
    const tft = this.totalFarmingRewardInTft * 60;
    const grossProfit = tft * current_price;
    return grossProfit - this.totalCosts;
  }

  public getRoi(price: number = this.priceAfter5Years): number {
    const { totalFarmingRewardInTft, investmentCostHW /* D38 */, powerUtilization, powerCost } = this; // prettier-ignore
    const tft = totalFarmingRewardInTft * 60;
    const usd /* D37 */ = tft * price;
    const powerCostOver5Years /* D33 */ = powerUtilization * 24 * .365 * 5 * powerCost; // prettier-ignore
    const roiX = usd - (investmentCostHW + powerCostOver5Years);
    const roiY = investmentCostHW + powerCostOver5Years;
    const roi = roiX / roiY;
    return roi * 100;
  }

  public get ROI(): string {
    return this.getRoi().toFixed(0) + "%";
  }

  public get grossProfit(): number {
    const tft = this.totalFarmingRewardInTft * 60;
    return tft * this.priceAfter5Years;
  }

  public get totalCosts(): number {
    const { powerUtilization, powerCost, investmentCostHW } = this;
    const powerCostOver5Years /* D33 */ = powerUtilization * 24 * .365 * 5 * powerCost; // prettier-ignore
    return powerCostOver5Years + investmentCostHW;
  }

  public get netProfit(): number {
    return this.grossProfit - this.totalCosts;
  }
}
