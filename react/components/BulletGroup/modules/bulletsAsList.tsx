import React from 'react'
import { BulletsSchema } from '../BulletTypes'


export const getBulletsAsTSXList = (
    bullets: BulletsSchema
) => (
    bullets.map((bullet: any, index) => {
        console.log("Bullets (bulletAsList.tsx):", bullet)
        return <div key={index}> Data
            <a href={bullet?.link?.url ? bullet?.link?.url : ""} >
                <p>{bullet?.titleBullet}</p>
                <p>{bullet?.image}</p>
            </a>
        </div>
    })
)