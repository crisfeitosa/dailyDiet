import * as S from './styles'
import LogoImg from '@assets/logo.png'

export function HomeHeader() {
  return (
    <S.HomeHeaderContainer>
      <S.Logo source={LogoImg} alt="Daily diet" />

      <S.AvatarEllipse>
        <S.Avatar
          source={{ uri: 'https://avatars.githubusercontent.com/u/50377128?s=400&u=6483917bf92e203b30053f551333dd75199e642f&v=4' }}
          alt="user image"
        />
      </S.AvatarEllipse>
    </S.HomeHeaderContainer>
  )
}
