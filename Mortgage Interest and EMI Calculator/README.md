# Problem Description:
Create a webpage for a bank that displays a message to a user regarding their loan request. Individual users should get a personalized message while bank managers should be able to view all users' loan statistics.

# Example:
- Mr. James takes a loan of $ 10,000 from Silicon Valley Bank at an interest rate of 8% for 3 years
- Mr. Peter takes a loan of $,8000 at interest rate of 7% for 2 years
- Ms Susan takes a loan of $5,000 at interest rate of 6% for 1.5 years

James's message: 

Dear Mr. James,
Congrats on availing the loan of $10,000.  You will be required to pay an EMI of $XXX.XX .......for the next .........months.

# Other Notes:
Please generate 3 letters where the template is the same.  But the parameters have to be taken from 3 different Arrays

- Interest = PTR/100    where T is in years
- Total Payable = Principal + Amount
- EMI per month = (Total Payable)/Total Months

EMI = "Equated Monthly Installment" or simply "Monthly Installment"

Please also create a Slider on the HomePage where they can check the EMI for different amounts

Make any assumptions required
