﻿using MVC.Budget.K_MYR.Models;

namespace MVC.Budget.K_MYR.Services;

public interface IFiscalPlansService
{
    Task<List<FiscalPlan>> GetFiscalPlans();
    FiscalPlan? GetByID(int id);
    ValueTask<FiscalPlan?> GetByIDAsync(int id);
    Task<FiscalPlan> AddFiscalPlan(FiscalPlanPost fiscalPlanPost);
    Task UpdateFiscalPlan(FiscalPlan fiscalPlan, FiscalPlanPut fiscalPlanPut);
    Task DeleteFiscalPlan(FiscalPlan fiscalPlan);
}
