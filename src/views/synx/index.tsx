
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const SynxView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="relative py-1">
      <div className="md:hero-content flex flex-col">
        <img src="SYNX-Words-Logo.png" height="300" width="450"></img>
      </div>
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Blockchain based cloud storage.</p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">Fast & cheap Blockchain based storage built for the masses with an extremely intuitive UX for mobile.</p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-primary-focus p-3 shadow-lg">

                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Decentalised Storage</h3>
                  <p className="mt-5 text-base text-gray-500">Decentralised systems by default, are tamper-proof and censorship-proof. Your data is not stored on our servers, it is encrypted and only accesible by you.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-primary-focus p-3 shadow-lg">

                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Data Permanence</h3>
                  <p className="mt-5 text-base text-gray-500">How do you guarantee information is kept for long-periods of time? As the web connects data and people over vast distances, your data is now kept forever.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-primary-focus p-3 shadow-lg">

                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Perfect Reporting</h3>
                  <p className="mt-5 text-base text-gray-500">Data confidentiality, integrity and availability. Achieve regulatory compliance in any industry by having an immutable record of all your files.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
