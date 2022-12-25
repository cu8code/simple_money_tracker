import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

const provider = new GoogleAuthProvider()


function sinInwithGoogle() {
  signInWithRedirect(getAuth(), provider)
}

export function AuthSinIn() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto sm:top-52 sm:left-48 md:h-full">
      <div className="w-full h-full max-w-md md:h-auto bg-slate-600">
        <div className="px-6 py-4 border-b rounded-t shadow">
          <h3 className="text-base font-semibold text-gray-500 lg:text-xl dark:text-white">
            SignIn
          </h3>
        </div>
        <div className="p-6">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400"> Connect with one of our available wallet providers or create a new one </p>
          <ul className="my-4 space-y-3">
            <li>
              <a onClick={sinInwithGoogle} className="flex items-center p-3 text-base font-bold text-gray-100 rounded-lg bg-gray-500 hover:bg-gray-400 group hover:shadow dark:text-white">
                <span className="flex-1 ml-3 whitespace-nowrap">Google</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

