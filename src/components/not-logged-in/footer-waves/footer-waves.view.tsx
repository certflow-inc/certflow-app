import { cn } from '@/lib/utils';
import { FooterWavesViewProps } from './footer-waves.types';

export function FooterWavesView({ className, ...props }: FooterWavesViewProps) {
  return (
    <div className={cn('w-full', className)} {...props}>
      <svg
        className="block md:hidden"
        width="100%"
        viewBox="0 0 320 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 59V3.27942C33.6111 6.77655 67.2222 10.2737 94 11.006C120.778 11.7383 140.722 9.70586 161.111 6.99413C181.5 4.28239 202.333 0.891398 228.889 0.15907C255.444 -0.573257 287.722 1.35308 320 3.27942V59H0Z"
          fill="url(#paint0_linear_21_73)"
          fillOpacity="0.53"
        />
        <path
          d="M0 59.4966V28.2177C23.9921 31.0826 47.9841 33.9475 74 36C100.016 38.0525 128.056 39.2925 158 36.5986C187.944 33.9048 219.794 27.277 247.111 25.2245C274.429 23.172 297.214 25.6948 320 28.2177V59.4966H0Z"
          fill="url(#paint1_linear_21_73)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_21_73"
            x1="960"
            y1="1947"
            x2="7975.55"
            y2="15709.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.05" stop-color="#2377AA" />
            <stop offset="0.95" stop-color="#7BDCB5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_21_73"
            x1="960"
            y1="1180.32"
            x2="3813.59"
            y2="10610.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.05" stop-color="#2377AA" />
            <stop offset="0.95" stop-color="#7BDCB5" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="hidden md:block"
        width="100%"
        viewBox="0 0 1440 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 178.277V9.90922C151.25 20.4763 302.5 31.0433 423 33.2562C543.5 35.469 633.25 29.3276 725 21.1337C816.75 12.9398 910.5 2.69348 1030 0.480652C1149.5 -1.73218 1294.75 4.08852 1440 9.90922V178.277H0Z"
          fill="url(#paint0_linear_21_70)"
          fillOpacity="0.53"
        />
        <path
          d="M0 177.768V84.3109C107.964 92.871 215.929 101.431 333 107.564C450.071 113.696 576.25 117.401 711 109.352C845.75 101.303 989.071 81.5002 1112 75.3676C1234.93 69.2351 1337.46 76.773 1440 84.3109V177.768H0Z"
          fill="url(#paint1_linear_21_70)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_21_70"
            x1="4320"
            y1="5883.13"
            x2="20372.2"
            y2="52781.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.05" stop-color="#2377AA" />
            <stop offset="0.95" stop-color="#7BDCB5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_21_70"
            x1="4320"
            y1="3526.64"
            x2="10259.8"
            y2="33088.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.05" stop-color="#2377AA" />
            <stop offset="0.95" stop-color="#7BDCB5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
