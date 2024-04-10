import { ref } from 'vue'
export const useToggle = (shufflingValues: any[]) => {
  const val: Ref = ref(shufflingValues[0])
  const toggle = (draft: any) => {
    if (draft) {
      val.value = draft
      return
    }

    const currentIndex = shufflingValues.indexOf(val.value)

    if (currentIndex === shufflingValues.length - 1) {
      val.value = shufflingValues[0]
      return
    }

    val.value = shufflingValues[currentIndex + 1]
  }

  return { val, toggle }
}
