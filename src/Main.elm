module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


-- import Html.Events exposing (onInput)


main : Program Never Model Msg
main =
    Html.beginnerProgram { model = model, view = view, update = update }



-- MODEL


type alias Model =
    { name : String
    , email : String
    }


model : Model
model =
    Model "" ""



-- Update


type Msg
    = Name String
    | Email String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }

        Email email ->
            { model | email = email }



-- View


view : Model -> Html Msg
view model =
    div [ class "SpeakFriend" ]
        [ viewHeader
        , viewContainer
        , viewFooter
        ]



-- Static View Functions: Return the Header for the app


viewHeader : Html a
viewHeader =
    header [ class "Speak__Header" ] [ text "Speak Friend" ]


viewContainer : Html a
viewContainer =
    main_ [ class "Speak__Container" ] [ text "I am the main container" ]


viewFooter : Html a
viewFooter =
    header [ class "Speak__Footer" ] [ text "im the footer" ]
