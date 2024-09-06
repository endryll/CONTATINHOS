import { Image, ImageProps, Text, View } from 'react-native'

import { styles } from './styles'

const variants = {
    size: {
        medium: {whidth: 54, height: 54,
        borderRadius: 18},
        large: {whidth: 100, height: 100,
        borderRadiu: 32},
    },
    text: {
        medium: {fontSize: 24},
        large: {fontSize: 32},
    }
}

type Props = {

    name: string
    image?: ImageProps | null

    variant?: "medium" | "large"

}

export function Avatar({ image, name, variant="medium" }: Props){
    return (
    <View>
        { image? (
            <Image source={image} style={variants.size[variant]} />
            ) :(
                <View style={styles.letter}>
                    <Text style={variants.text[variant]}>{name[0].toUpperCase()}
                    </Text>
                </View>
            )}
    </View>
    )
}