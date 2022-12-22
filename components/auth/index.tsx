import { useEffect, useRef } from "react"
import { signInWithPopup } from "firebase/auth"
import useFirebaseContext from "../../pages/firebasecontext"

export default function Auth() {
  const buttton = useRef<HTMLAnchorElement>(null)
  const firebasecontext = useFirebaseContext()
  useEffect(() => {
    if (buttton.current === null) { return }
    buttton.current.addEventListener("click", (e) => {
      if (firebasecontext === null) return
      signInWithPopup(firebasecontext.auth, firebasecontext.provider).then(user => {
        if (user) {
          console.log(user.user.email);
        }
      })
    })
  })
  return (
    <div className="fixed top-0 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
      <div className="w-full h-full max-w-md md:h-auto bg-slate-600">
        <div className="px-6 py-4 border-b rounded-t shadow">
          <h3 className="text-base font-semibold text-gray-500 lg:text-xl dark:text-white">
            Ankan
          </h3>
        </div>
        <div className="p-6">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-500"> Connect with one of our available wallet providers or create a new one </p>
          <ul className="my-4 space-y-3">
            <li>
              <a ref={buttton} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 group hover:shadow dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Google</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
