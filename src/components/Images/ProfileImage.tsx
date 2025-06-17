import Image from 'next/image'
import perfil from '@/app/assets/imgs/me.jpg'

export default function ProfileImage() {
    return (
        <div className="w-full md:w-1/3 flex justify-center">
            <Image
                src={perfil}
                alt="Mateus Maranhão"
                width={256}
                height={256}
                className="rounded-lg object-cover shadow-[5px_5px_10px_#ffffff33]"
            />
        </div>
    )
}