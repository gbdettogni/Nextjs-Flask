import Image from 'next/image';
import img from '@/public/Aicas_Logo.png';

export function Logo() {
    return (<Image src={img} alt="Logo da associacao" width={200} height={100} />)
}