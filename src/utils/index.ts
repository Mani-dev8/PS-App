import { Dimensions, Image, View } from "react-native";
import cyberpunk2077 from "../../assets/images/cyberpunk2077.png";
import ghostOfTsushima from "../../assets/images/ghost_of_tsushima.png";
import theLastOfUs from "../../assets/images/the_last_of_us.png";
import textTheLastOfUs from "../../assets/images/text_the_last_of_us.png";
import predatorHuntingGrounds from "../../assets/images/predator_hunting_grounds.png";
import doomEternal from "../../assets/images/doom_eternal.png";
import HCircle from "../../assets/images/hollow_circle_3d_shape.png";
import HTriangle from "../../assets/images/hollow_triangle_3d_shape.png";
import HSquare from "../../assets/images/hollow_square_3d_shape.png";
import Plus from "../../assets/images/plus_3d_shape.png";

export const colors = {
    'primary-blue': '#287BC6'
}

export const { width, height } = Dimensions.get('screen')

export type TGeometricShape = 'circle' | 'square' | 'plus' | 'triangle'

export interface IData {
    image: any;
    title: string;
    titleImage?: any;
    shapes?: {
        name: TGeometricShape,
        image: string
    }[]
};


export const data: IData[] = [
    {
        image: cyberpunk2077,
        title: 'Cyberpunk 2077',
        shapes: [
            {
                name: 'circle',
                image: HCircle
            },
            {
                name: 'triangle',
                image: HTriangle
            }
        ]
    },
    {
        image: ghostOfTsushima,
        title: 'Ghost of Tsushima',
        shapes: [
            {
                name: 'square',
                image: HSquare
            },
            {
                name: 'plus',
                image: Plus
            }
        ]

    },
    {
        image: theLastOfUs,
        titleImage: textTheLastOfUs,
        title: 'The Last of Us Part II',
        shapes: [
            {
                name: 'circle',
                image: HCircle
            },
            {
                name: 'triangle',
                image: HTriangle
            }
        ]
    },
    {
        image: predatorHuntingGrounds,
        title: 'Predator Hunting Grounds',
        shapes: [
            {
                name: 'square',
                image: HSquare
            },
            {
                name: 'plus',
                image: Plus
            }
        ]
    },
    {
        image: doomEternal,
        title: 'Doom Eternal',
        shapes: [
            {
                name: 'circle',
                image: HCircle
            },
            {
                name: 'triangle',
                image: HTriangle
            }
        ]
    },
]