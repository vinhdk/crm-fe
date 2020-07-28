import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CalculateRevenueStatisticsModel, CompanyStatisticsInQTSCModel, TotalInvestor, VondautuInvestor, VondautuSoftware, TotalSoftware, TotalPeople, TopRevenue, ObjectType, ParticipantsInMonth, Contract, TotalInsideOutsideSoftware, GetCompleteRate, TelecommunicationRevenue, BuildingInventory } from '../models/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  getTotalInvestors(): Promise<TotalInvestor[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<TotalInvestor[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.totalInvestors}?year=${startYear}`
    ).toPromise();
  }
  getVondautuInvestors(): Promise<VondautuInvestor[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<VondautuInvestor[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.vondautuInvestors}?year=${startYear}`
    ).toPromise();
  }
  getVondautuSoftwares(): Promise<VondautuSoftware[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<VondautuSoftware[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.vondautuSoftwares}?year=${startYear}`
    ).toPromise();
  }
  getTotalSoftwares(): Promise<TotalSoftware[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<TotalSoftware[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.totalSoftwares}?year=${startYear}`
    ).toPromise();
  }
  getTotalInsideOutsideSoftwares(): Promise<TotalInsideOutsideSoftware[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<TotalInsideOutsideSoftware[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.totalInsideOutsideSoftwares}?year=${startYear}`
    ).toPromise();
  }
  getTotalPeoples(): Promise<TotalPeople[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<TotalPeople[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.totalPeoples}?year=${startYear}`
    ).toPromise();
  }
  getTopRevenue(): Promise<TopRevenue> {
    const topnumber = '5';
    return this.httpClient.get<TopRevenue>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.topRevenue}?top=${topnumber}`
    ).toPromise();
  }

  getCalculateRevenueStatistics(): Promise<CalculateRevenueStatisticsModel> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<CalculateRevenueStatisticsModel>(
      `${environment.endPoint}${environment.apiPaths.revenue.calculateRevenueStatistics}?year=${startYear}`
    ).toPromise();
  }

  getObjectType(): Promise<ObjectType[]> {
    return this.httpClient.get<ObjectType[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.objectType}`
    ).toPromise();
  }

  getCompanyStatisticsInQTSC(): Promise<CompanyStatisticsInQTSCModel[]> {
    return this.httpClient.get<CompanyStatisticsInQTSCModel[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.companyStatisticsInQTSC}`
    ).toPromise();
  }

  getParticipantsInMonth(): Promise<ParticipantsInMonth> {
    return this.httpClient.get<ParticipantsInMonth>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.participantsInMonth}`
    ).toPromise();
  }

  getContractExpire(): Promise<Contract[]> {
    return this.httpClient.get<Contract[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.contractExpire}`
    ).toPromise();
  }
  getContractAdjustment(): Promise<Contract[]> {
    return this.httpClient.get<Contract[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.contractAdjustment}`
    ).toPromise();
  }
  getContractLiquidated(): Promise<Contract[]> {
    return this.httpClient.get<Contract[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.contractLiquidated}`
    ).toPromise();
  }
  getGetCompleteRate(): Promise<GetCompleteRate[]> {
    return this.httpClient.get<GetCompleteRate[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.getCompleteRate}`
    ).toPromise();
  }
  getBuildingInventory(): Promise<BuildingInventory[]> {
    return this.httpClient.get<BuildingInventory[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.buildingInventory}`
    ).toPromise();
  }

  getProportionOfParentTelecommunicationRevenue(): Promise<TelecommunicationRevenue[]> {
    return this.httpClient.get<TelecommunicationRevenue[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.proportionOfParentTelecommunicationRevenue}`
    ).toPromise();
  }
  getProportionOfTelecommunicationRevenue(): Promise<TelecommunicationRevenue[]> {
    return this.httpClient.get<TelecommunicationRevenue[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.proportionOfTelecommunicationRevenue}`
    ).toPromise();
  }
  getProportionOfTelecommunicationRevenueInsideOutside(): Promise<TelecommunicationRevenue[]> {
    return this.httpClient.get<TelecommunicationRevenue[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.proportionOfTelecommunicationRevenueInsideOutside}`
    ).toPromise();
  }
  getIncreaseOutsideRate(): Promise<{ Year: string, Total: number }[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<{ Year: string, Total: number }[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.increaseOutsideRate}?year=${startYear}`
    ).toPromise();
  }
  getIncreaseRate(): Promise<{ Year: string, Total: number }[]> {
    const startYear = new Date().getFullYear();
    return this.httpClient.get<{ Year: string, Total: number }[]>(
      `${environment.endPoint}${environment.apiPaths.dashboard.get}${environment.apiPaths.dashboard.increaseRate}?year=${startYear}`
    ).toPromise();
  }
}
