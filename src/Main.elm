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

        -- , viewFooter -- commented out until needed
        ]



-- Dynamic View Functions: Each of these functions interact with the model in some way.


viewSubmissionForm : Html Msg
viewSubmissionForm =
    section [ class "Submission section_container " ]
        [ div [ class "Submission__text" ]
            [ h3 [] [ text "Hello! 👋" ]
            , p [] [ text "Speak, Friend connects people who want to speak on a topic with people and organizations seeking speakers for events." ]
            , p [] [ text "If you are looking to speak at conferences, workshops, meetups, etc--this tool might be able to help. Submit a proposal using our form and tag it so event runners may see it." ]
            , p [] [ text "Are you an event organizer looking for speakers? You can use the other half of Speak, Friend to post opening for speakers." ]
            ]
        , div [ class "Submission__form" ]
            [ input [ type_ "text", placeholder "Name", onInput Name ] []
            , input [ type_ "text", placeholder "Email", onInput Email ] []
            , textarea [ height 100, placeholder "A description of the topic you'd like to speak on..." ] []
            , button [] [ text "SUBMIT" ]
            ]
        ]



-- Static View Functions: Return HTML that is not inteselfracted with. This DOES nest dynamic view functions^


viewNavigation : Html a
viewNavigation =
    nav [ class "Nav" ]
        [ h1 [ class "Nav__masthead" ] [ text "Speak Friend" ]
        , ul [ class "Nav__links" ]
            [ li [] [ a [ href "https://github.com/speakfriend/speakfriend/", target "_blank" ] [ text "contribute" ] ]
            ]
        ]


viewContainer : Html Msg
viewContainer =
    main_ [ class "Speak__Container" ]
        [ viewSubmissionForm ]



-- viewFooter : Html a
-- viewFooter =
--     header [ class "Speak__Footer" ] [ text "im the footer" ]
