using System.Net;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Threading;

namespace SpotifyAPI.Web.Http
{
  public interface IAPIConnector
  {
    // IAuthenticator Authenticator { get; }

    // IJSONSerializer JSONSerializer { get; }

    // IHTTPClient HTTPClient { get; }

    event EventHandler<IResponse>? ResponseReceived;

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    Task<T> Get<T>(Uri uri, CancellationToken? cancellationToken = null);
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    Task<T> Get<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null);
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Naming", "CA1716")]
    Task<HttpStatusCode> Get(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);

    Task<T> Post<T>(Uri uri, CancellationToken? cancellationToken = null);
    Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null);
    Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);
    Task<T> Post<T>(Uri uri, IDictionary<string, string>? parameters, object? body, Dictionary<string, string>? headers, CancellationToken? cancellationToken = null);
    Task<HttpStatusCode> Post(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);

    Task<T> Put<T>(Uri uri, CancellationToken? cancellationToken = null);
    Task<T> Put<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null);
    Task<T> Put<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);
    Task<HttpStatusCode> Put(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);
    Task<HttpStatusCode> PutRaw(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);

    Task<T> Delete<T>(Uri uri, CancellationToken? cancellationToken = null);
    Task<T> Delete<T>(Uri uri, IDictionary<string, string>? parameters, CancellationToken? cancellationToken = null);
    Task<T> Delete<T>(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);
    Task<HttpStatusCode> Delete(Uri uri, IDictionary<string, string>? parameters, object? body, CancellationToken? cancellationToken = null);

    Task<T> SendAPIRequest<T>(
      Uri uri, HttpMethod method,
      IDictionary<string, string>? parameters = null,
      object? body = null,
      IDictionary<string, string>? headers = null,
      CancellationToken? cancellationToken = null);

    void SetRequestTimeout(TimeSpan timeout);
  }
}
