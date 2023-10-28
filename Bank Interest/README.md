# Problem Description
Suresh is having a salaried job. His Income and Expenditure for Jul, Aug 2023 are indicated in the Bank Statement below. (.csv file)

- Bank 1 pays Daily Interest at 5% for the amount available at 23:59 hrs (EOD)
- Bank 2 pays Monthly Interest at 8% for least amount available during the month

Please compute:  
1. Total interest paid by Bank 1 as of 31-Aug-2023 
2. Total interest paid by Bank 2 as of 31-Aug-2023

Which Bank is better for Suresh's cash-flow situation? And why?

# Solution Description

## Logical Flow for Bank 1
1. Create a list of all days in given period
2. For each day, check if there is any credit or debit entries in given csv file
3. If no credit/debit entries, principle is constant, else add credit/subtract debit
4. Store this in list of daily principle values
5. Multiply each days principle by time (1/365 for daily compounding) and rate (.05 for Bank 1)
6. Store this in a list of daily interests
7. Sum all the daily interests to find total interest Bank 1 owes customer

## Logical Flow for Bank 2
1. Create a list of all months included in given period
2. For each month, make a list of all days in the month
3. For each day, check if there is any credit or debit entries in given csv file
4. If no credit/debit entries, principle is constant, else add credit/subtract debit, 
5. Store this in list of daily principle values
6. Find the minimum principle and multiply by time (31/365 for monthly interest) and rate (.08 for Bank 2)
7. Store this in a list of monthly interests
8. Sum all the monthly interests to find total interest Bank 2 owes customer

### Then display both interest amounts and tell customer which Bank is offering a better deal