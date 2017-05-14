module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


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
        [ header
            [ class "Speak__Header" ]
            [ text "Speak Friend" ]
        , section
            [ class "Speak__form" ]
            [ text "Form - To do." ]
        ]
