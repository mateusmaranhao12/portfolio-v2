import Image from 'next/image'
import perfil from '@/app/assets/imgs/me.jpg'

export default function ProfileImage() {
    return (
        <div className="w-64 h-64 flex justify-center ">
            <Image
                src={perfil}
                alt="Mateus Maranhão"
                width={256}
                height={256}
                className="rounded-full object-cover shadow-[5px_5px_10px_#ffffff33] border-4 border-yellow-300"
            />
        </div>
    )
}