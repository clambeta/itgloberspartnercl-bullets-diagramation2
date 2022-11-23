import React, { PropsWithChildren } from 'react'
import { useListContext } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'



export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children

}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || []

    console.log("List (index.tsx)", list)
    console.log("Bullets (index.tsx)", bullets)

    const bulletsContent = getBulletsAsTSXList(bullets);

    if (false) {
        console.log(children, list)
    }
    return (
        isMobile
            ?
            <div>Extamos en mobile</div>
            :
            <div>{bulletsContent}</div>
    )
}


export default BulletGroup;


