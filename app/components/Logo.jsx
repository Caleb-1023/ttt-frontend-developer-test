import Image from "next/image";
import logo from "../../public/assets/img/logo-light.svg";
import logoDark from "../../public/assets/img/logo-dark.svg";

export default function Logo({dark, className}) {
  return (
    <div className={className}>
        
      <Image priority src={dark ? logoDark : logo} alt="Logo" />
    </div>
  );
}
