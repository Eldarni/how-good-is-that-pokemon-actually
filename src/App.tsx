
//
import React, { useEffect, useState } from 'react'

//
import { useTranslation } from 'react-i18next'

//
import Layout from './components/Layout'

//
export default function() {

    //
    const { t } = useTranslation()

    //update the title
    useEffect(() => { document.title = t('dexxie') }, [])

    //
    return (
        <Layout>
            Hello
        </Layout>
    )

}