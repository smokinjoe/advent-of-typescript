const survivalRatio = (input: string | number) => {
  const quarter = typeof input === "string" ? input : `${input} Q1`;
  const data = quarterlyData[quarter];
  if (!data) {
    throw new Error("Data not found");
  }
  return data.housingIndex / data.minimumWage;
};
