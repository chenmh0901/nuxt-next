export const useFilter = (computeData: StoryDetail[]) => {
  let i = 0;
  return function filter() {
    i++;
    return computeData.filter((data) => data.id % i === 0)
  }

}
