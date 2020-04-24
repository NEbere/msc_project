const lodash = require('lodash')
const timeOptions = [
    {
      name: '1 hour', value: '1', spotsCount: 18,
      mealIndexes: {
        breakfast: 3, lunch: 7, dinner: 12
      }
    },
    {
      name: '1 hour 30', value: '1:30', spotsCount: 12,
      mealIndexes: {
        breakfast: 3, lunch: 6, dinner: 10
      }
    },
    {
      name: '2 hours', value: '2', spotsCount: 8,
      mealIndexes: {
        breakfast: 0, lunch: 4, dinner: 7
      }
    },
  ];

  const res = lodash.find(timeOptions, option=> (option.spotsCount == 8))
  const res2 = timeOptions.find(item => item.spotsCount == 8)
  console.log(res2.mealIndexes['lunch'])