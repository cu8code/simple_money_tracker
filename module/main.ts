

export class DataHandeler {
  // props
  private _money: number;
  private _ideaMoneyConsumptionRate: number
  private _numberOfDaysToConsume: number

  constructor(money?: number, numberOfDaysToConsume?: number) {
    this._money = money || (function() {
      return Number(window.localStorage.getItem("_money") || 0)
    })();
    this._numberOfDaysToConsume = numberOfDaysToConsume || 30
    this._ideaMoneyConsumptionRate = this._money / this._numberOfDaysToConsume
  }
  // methods
  public set setMoney(v: number) {
    window.localStorage.setItem("_money", String(v))
    this._money = v;
    this._ideaMoneyConsumptionRate = this._money / this._numberOfDaysToConsume
  }
  public get getMoney(): number {
    return this._money
  }

  public set setNumberOfDaysToConsume(v: number) {
    this._numberOfDaysToConsume = v;
    this._ideaMoneyConsumptionRate = this._money / this._numberOfDaysToConsume
  }
  public get getNumberOfDaysToConsume(): number {
    return this._numberOfDaysToConsume
  }

  // only get method
  public get getIdealMoneyConsumptionRate(): number {
    return this._ideaMoneyConsumptionRate
  }

  /**
   * generateDataForGraph
   */
  public generateDataForGraph() {
    
  }
}
