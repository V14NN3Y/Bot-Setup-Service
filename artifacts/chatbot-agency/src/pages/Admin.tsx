import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Trash2, ArrowLeft, LogOut, MessageSquare, Users, CheckCircle2, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
  type Submission,
  type SubmissionStatus,
} from "@/lib/submissions";

const ADMIN_PASSWORD = "botagence2024";

const statusConfig: Record<SubmissionStatus, { label: string; variant: "default" | "secondary" | "outline" }> = {
  nouveau: { label: "Nouveau", variant: "default" },
  en_cours: { label: "En cours", variant: "secondary" },
  livre: { label: "Livré", variant: "outline" },
};

const companyTypeLabels: Record<string, string> = {
  ecommerce: "Boutique e-commerce",
  clinique: "Clinique / Cabinet",
  concessionnaire: "Concessionnaire auto",
  restaurant: "Restaurant",
  autre: "Autre",
};

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    if (authenticated) {
      setSubmissions(getSubmissions());
    }
  }, [authenticated]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect.");
    }
  }

  function handleStatusChange(id: string, status: SubmissionStatus) {
    updateSubmissionStatus(id, status);
    setSubmissions(getSubmissions());
  }

  function handleDelete(id: string) {
    deleteSubmission(id);
    setSubmissions(getSubmissions());
  }

  function handleRefresh() {
    setSubmissions(getSubmissions());
  }

  const counts = {
    total: submissions.length,
    nouveau: submissions.filter((s) => s.status === "nouveau").length,
    en_cours: submissions.filter((s) => s.status === "en_cours").length,
    livre: submissions.filter((s) => s.status === "livre").length,
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">BotAgence</span>
            </div>
            <CardTitle className="text-lg">Espace administration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Mot de passe</Label>
                <Input
                  id="admin-password"
                  data-testid="input-admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoFocus
                />
              </div>
              {error && (
                <p data-testid="text-login-error" className="text-sm text-destructive">{error}</p>
              )}
              <Button data-testid="button-login" type="submit" className="w-full">
                Accéder au tableau de bord
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                Retour au site
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="font-bold">BotAgence</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">Administration</span>
          </div>
          <div className="flex items-center gap-2">
            <Button data-testid="button-refresh" variant="outline" size="sm" onClick={handleRefresh}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Link href="/">
              <Button data-testid="button-logout" variant="ghost" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Quitter
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Tableau de bord</h1>
          <p className="text-muted-foreground">Gérez les demandes de devis reçues via le formulaire de contact.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p data-testid="text-stat-total" className="text-2xl font-bold">{counts.total}</p>
                </div>
                <Users className="w-8 h-8 text-muted-foreground/40" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Nouveaux</p>
                  <p data-testid="text-stat-nouveau" className="text-2xl font-bold text-primary">{counts.nouveau}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-primary/30" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">En cours</p>
                  <p data-testid="text-stat-en-cours" className="text-2xl font-bold text-amber-600">{counts.en_cours}</p>
                </div>
                <Clock className="w-8 h-8 text-amber-600/30" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Livrés</p>
                  <p data-testid="text-stat-livre" className="text-2xl font-bold text-emerald-600">{counts.livre}</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-emerald-600/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions */}
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Aucune demande reçue pour l'instant.</p>
              <p className="text-sm text-muted-foreground mt-1">Les nouvelles demandes du formulaire apparaîtront ici.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <Card key={s.id} data-testid={`card-submission-${s.id}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span data-testid={`text-submission-name-${s.id}`} className="font-semibold">{s.name}</span>
                        <Badge variant={statusConfig[s.status].variant}>
                          {statusConfig[s.status].label}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(s.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Email : </span>
                          <a
                            data-testid={`link-submission-email-${s.id}`}
                            href={`mailto:${s.email}`}
                            className="text-primary hover:underline"
                          >
                            {s.email}
                          </a>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Type : </span>
                          <span>{companyTypeLabels[s.companyType] ?? s.companyType}</span>
                        </div>
                      </div>
                      <div className="text-sm bg-muted rounded-md p-3">
                        <span className="text-muted-foreground text-xs uppercase tracking-wide font-medium">Message</span>
                        <p data-testid={`text-submission-message-${s.id}`} className="mt-1">{s.message}</p>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:items-end shrink-0">
                      <Select
                        value={s.status}
                        onValueChange={(val) => handleStatusChange(s.id, val as SubmissionStatus)}
                      >
                        <SelectTrigger
                          data-testid={`select-status-${s.id}`}
                          className="w-36"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nouveau">Nouveau</SelectItem>
                          <SelectItem value="en_cours">En cours</SelectItem>
                          <SelectItem value="livre">Livré</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        data-testid={`button-delete-${s.id}`}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(s.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
