package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import scala.concurrent._
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.libs.ws._
import play.api.http.HttpEntity
import play.api.libs.json.Json


@Singleton
class HomeController @Inject()(
  ws: WSClient,
  val controllerComponents: ControllerComponents
  )
   extends BaseController {

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
    futureResponse.map{ response => Ok(response.json) }
  }

}
