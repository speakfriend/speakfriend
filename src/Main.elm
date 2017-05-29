module Main exposing (..)

-- IMPORTS

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main : Program Never Model Msg
main =
    Html.beginnerProgram { model = model, view = view, update = update }



-- MODEL


type alias Model =
    { name : String
    , email : String
    , description : String
    }


model : Model
model =
    Model "" "" ""



-- Update


type Msg
    = Name String
    | Email String
    | Description String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }

        Email email ->
            { model | email = email }

        Description description ->
            { model | description = description }



-- View


view : Model -> Html Msg
view model =
    div [ class "SpeakFriend" ]
        [ viewNavigation
        , viewContainer
        , viewFooter
        ]



-- Dynamic View Functions: Each of these functions interact with the model in some way.


viewSubmissionForm : Html Msg
viewSubmissionForm =
    section [ class "Speaker__Formbox" ]
        [ input [ type_ "text", placeholder "Name", onInput Name ] []
        , input [ type_ "text", placeholder "Email", onInput Email ] []
        , textarea [] []
        ]



-- Static View Functions: Return HTML that is not interacted with. This DOES nest dynamic view functions^


viewNavigation : Html a
viewNavigation =
    nav [ class "Nav" ]
        [ h1 [ class "Nav__masthead" ] [ text "Speak Friend" ]
        , ul [ class "Nav__links" ]
            [ li [] [ a [ href "#" ] [ text "contribute" ] ]
            , li [] [ a [ href "#" ] [ text "about" ] ]
            , li [] [ a [ href "#" ] [ text "contact" ] ]
            ]
        ]


viewContainer : Html Msg
viewContainer =
    main_ [ class "Speak__Container" ]
        [ viewSubmissionForm
        ]


viewFooter : Html a
viewFooter =
    header [ class "Speak__Footer" ] [ text "im the footer" ]
