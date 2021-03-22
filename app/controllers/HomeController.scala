package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import scala.concurrent.Future
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration._
import play.api.libs.ws._
import play.api.http.HttpEntity
import akka.actor.ActorSystem
import akka.stream.scaladsl._
import akka.util.ByteString
import play.api.Logger

import play.api.libs.json.Json

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(
  ws: WSClient,
  val controllerComponents: ControllerComponents
  )
   extends BaseController {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def createMsg(name: String, age: Int) = Action {
    Ok(Json.obj("content" -> s"${age}歳の${name}さんこんにちは!!"))
  }

  def getAddress(zipcode: String) = Action.async {
    val url: String = s"https://zipcloud.ibsnet.co.jp/api/search?zipcode=${ zipcode }"
    val request: WSRequest = ws.url(url)
    val complexRequest: WSRequest =request.addHttpHeaders("Accept" -> "application/json")
    val futureResponse: Future[WSResponse] = complexRequest.get()
    futureResponse.map{ response => Ok(response.body) }
  }

}
