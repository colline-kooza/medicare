import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface LabTest {
  id: string
  name: string
  originalPrice: number
  price: number
  isAdded?: boolean
}

interface LabTestsState {
  tests: LabTest[]
  totalAmount: number
  addTest: (test: LabTest) => void
  removeTest: (testId: string) => void
  calculateTotal: () => number
}

export const useLabTests = create<LabTestsState>()(
  persist(
    (set, get) => ({
      tests: [],
      totalAmount: 0,
      
      calculateTotal: () => {
        const state = get()
        return state.tests.reduce((sum, test) => sum + test.price, 0)
      },
      
      addTest: (test) =>
        set((state) => {
          const updatedTests = [...state.tests, test]
          return {
            tests: updatedTests,
            totalAmount: updatedTests.reduce((sum, t) => sum + t.price, 0)
          }
        }),
        
      removeTest: (testId) =>
        set((state) => {
          const updatedTests = state.tests.filter((test) => test.id !== testId)
          return {
            tests: updatedTests,
            totalAmount: updatedTests.reduce((sum, t) => sum + t.price, 0)
          }
        }),
    }),
    {
      name: 'lab-tests-storage',
    }
  )
)